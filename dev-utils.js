#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Utility functions for development

// Count lines in a file
function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.split('\n').length;
}

// Find large files in the project
function findLargeFiles(dir, minLines = 1000) {
  const results = [];

  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules' && item !== 'build') {
          traverse(fullPath);
        }
      } else if (
        item.endsWith('.tsx') ||
        item.endsWith('.ts') ||
        item.endsWith('.jsx') ||
        item.endsWith('.js')
      ) {
        const lines = countLines(fullPath);
        if (lines >= minLines) {
          results.push({ path: fullPath, lines });
        }
      }
    }
  }

  traverse(dir);
  return results.sort((a, b) => b.lines - a.lines);
}

// Check for common issues
function checkForIssues() {
  console.log('🔍 Checking for common issues...\n');

  // Check for large files
  const largeFiles = findLargeFiles('.');
  if (largeFiles.length > 0) {
    console.log('📄 Large files found:');
    largeFiles.forEach((file) => {
      console.log(`  - ${file.path}: ${file.lines.toLocaleString()} lines`);
    });
    console.log('');
  }

  // Check for console.logs
  const { execSync } = require('child_process');
  try {
    const consoleCount = execSync(
      'grep -r "console.log" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | wc -l',
      { encoding: 'utf8' }
    ).trim();
    if (parseInt(consoleCount) > 0) {
      console.log(`⚠️  Found ${consoleCount} console.log statements in src/`);
    }
  } catch (e) {
    // Ignore errors
  }

  // Check for TODOs
  try {
    const todoCount = execSync(
      'grep -r "TODO" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | wc -l',
      { encoding: 'utf8' }
    ).trim();
    if (parseInt(todoCount) > 0) {
      console.log(`📝 Found ${todoCount} TODO comments in src/`);
    }
  } catch (e) {
    // Ignore errors
  }
}

// Main execution
if (require.main === module) {
  const command = process.argv[2];

  switch (command) {
    case 'check':
      checkForIssues();
      break;
    case 'large-files':
      const largeFiles = findLargeFiles('.');
      console.log('Large files in project:');
      largeFiles.forEach((file) => {
        console.log(`${file.path}: ${file.lines.toLocaleString()} lines`);
      });
      break;
    default:
      console.log('Usage: node dev-utils.js [command]');
      console.log('Commands:');
      console.log('  check        - Check for common issues');
      console.log('  large-files  - Find large files in project');
  }
}

module.exports = { countLines, findLargeFiles, checkForIssues };
