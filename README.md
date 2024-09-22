

---

# 📝 Appwrite ToDo App

Welcome to the **Appwrite ToDo** application repository! This is a simple, yet powerful, task management app built with **React** and **Appwrite**.

### 🌐 [Live Demo](https://to-do-using-apwrite-backend-658v.vercel.app/)

## 🚀 Features

- **Create ToDos**: Add tasks easily.
- **Update ToDos**: Modify your existing tasks.
- **Complete/Incomplete**: Toggle the completion status of each task.
- **Delete ToDos**: Remove tasks that are no longer needed.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Appwrite](https://appwrite.io/)
- **Database**: Appwrite's NoSQL Database
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 🌟 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/appwrite-todo.git
cd appwrite-todo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Appwrite

- If you haven't already, install and set up Appwrite by following the [Appwrite installation guide](https://appwrite.io/docs/installation).
- Create a new Appwrite project and configure your **Database** and **Collections**.

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
VITE_APPWRITE_ENDPOINT=<Your Appwrite endpoint>
VITE_APPWRITE_PROJECT_ID=<Your Appwrite project ID>
VITE_COLLECTION_ID_TASKS=<Your tasks collection ID>
```

### 5. Start the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## 📝 Usage

1. **Add a New Task**: Enter your task in the input field and hit "Add Note."
2. **Toggle Completion**: Click on the task to mark it as complete or incomplete.
3. **Delete a Task**: Click the delete icon next to a task to remove it.

## 📦 Deployment

To deploy the app, follow these steps:

1. **Build the App**:
   ```bash
   npm run build
   ```
2. Deploy the generated files to your preferred hosting platform (e.g., Vercel, Netlify).

## 👏 Contributing

Feel free to fork this project, open issues, or submit pull requests! Contributions are welcome.

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

