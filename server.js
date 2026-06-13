const express = require('express');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// Path to the workspace root
const workspaceDir = path.join(__dirname, '..');
const classWorkDir = path.join(workspaceDir, 'Class work wdd 2407');
const courseDataPath = path.join(__dirname, 'course_data.json');

// Serve static frontend assets from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the 'Class work wdd 2407' folder statically under '/class-work'
// This lets the browser play MP4 files directly using URLs like: /class-work/10. class 10/class 10 assignment.mp4
app.use('/class-work', express.static(classWorkDir));

// API Endpoint to get the course outline database
app.get('/api/course-data', (req, res) => {
  if (!fs.existsSync(courseDataPath)) {
    return res.status(404).json({ error: 'course_data.json not found' });
  }
  
  fs.readFile(courseDataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read course data' });
    }
    try {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse course data JSON' });
    }
  });
});

// API Endpoint to open video files in default system media player (like VLC)
app.get('/api/open-video', (req, res) => {
  const videoRelPath = req.query.path;
  if (!videoRelPath) {
    return res.status(400).json({ error: 'Video path parameter is required' });
  }

  // Resolve absolute path to video file
  const videoAbsPath = path.join(workspaceDir, videoRelPath);

  // Security check: ensure path is within workspace
  const relative = path.relative(workspaceDir, videoAbsPath);
  const isSafe = relative && !relative.startsWith('..') && !path.isAbsolute(relative);
  
  if (!isSafe) {
    return res.status(403).json({ error: 'Access denied: path is outside workspace' });
  }

  if (!fs.existsSync(videoAbsPath)) {
    return res.status(404).json({ error: 'Video file does not exist' });
  }

  // Windows command to open file in default application
  // wrap path in quotes to support spaces
  const command = `start "" "${videoAbsPath}"`;

  exec(command, (error) => {
    if (error) {
      console.error(`Error opening video file: ${error.message}`);
      return res.status(500).json({ error: 'Failed to open video file in system player' });
    }
    res.json({ success: true, message: 'Video opened in default media player' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`WDD Course Dashboard running at: http://localhost:${PORT}`);
  console.log(`Workspace path: ${workspaceDir}`);
  console.log(`Class work path: ${classWorkDir}`);
  console.log(`=======================================================`);
});
