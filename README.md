# To-Do List Application

A modern, feature-rich to-do list application with local storage functionality. Built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Add Tasks** - Quickly add new tasks to your list
✅ **Mark Complete** - Check off tasks when completed
✅ **Delete Tasks** - Remove individual tasks
✅ **Filter Tasks** - View all, active, or completed tasks
✅ **Local Storage** - Your tasks are automatically saved to your browser
✅ **Persistent Data** - Tasks remain even after closing the browser
✅ **Statistics** - Track how many tasks are left
✅ **Responsive Design** - Works great on mobile and desktop
✅ **Clean UI** - Modern, intuitive interface with smooth animations

## How to Use

1. **Add a Task**: Type in the input field and click "Add" or press Enter
2. **Complete a Task**: Click the checkbox next to the task
3. **Delete a Task**: Click the "Delete" button on any task
4. **Filter Tasks**: Use the filter buttons to view:
   - **All**: Show all tasks
   - **Active**: Show only incomplete tasks
   - **Completed**: Show only completed tasks
5. **Clear Completed**: Click "Clear Completed" to remove all finished tasks at once

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **Vanilla JavaScript**: No dependencies, pure JS
- **Local Storage API**: Browser storage for persistent data

### Local Storage

The application uses the browser's Local Storage API to save your tasks. Each task is stored as a JSON object with:
- `id`: Unique identifier (timestamp)
- `text`: Task description
- `completed`: Boolean status
- `createdAt`: Creation timestamp

Data is automatically saved whenever you:
- Add a new task
- Complete/uncomplete a task
- Delete a task
- Clear completed tasks

### File Structure

```
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── app.js          # Application logic
└── README.md       # Documentation
```

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Local Storage Limits

- Typical limit: 5-10MB per domain
- Maximum task text: 200 characters
- Browser-specific limitations may apply

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start managing your tasks!

## Features Explained

### Data Persistence
All tasks are automatically saved to your browser's local storage. You can close the app or even your browser, and your tasks will still be there when you return.

### Filtering System
Quickly switch between viewing all tasks, only incomplete tasks, or only completed tasks.

### Statistics
The app displays how many tasks you have left to complete, helping you stay motivated.

### Responsive Design
The application adapts to different screen sizes, making it easy to use on phones, tablets, and desktops.

## Development

### How to Modify

1. **Styling**: Edit `styles.css` to change colors, fonts, or layout
2. **Functionality**: Modify `app.js` to add new features
3. **Structure**: Update `index.html` to change the HTML structure

### Adding New Features

Some ideas for enhancements:
- Task priority levels
- Due dates
- Categories/tags
- Export/import functionality
- Task editing
- Search functionality
- Dark mode
- Sound notifications

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!

---

Enjoy organizing your tasks! 🚀