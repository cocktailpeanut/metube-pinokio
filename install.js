module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/alexta69/metube app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/ui",
        message: [
          "npm install",
          "npm run build"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.13",
        path: "app",
        message: [
          "uv sync"
        ]
      }
    }
  ]
}
