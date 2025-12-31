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
      method: "fs.write",
      params: {
        path: "app/ui/.npmrc",
        text: "shamefully-hoist=true"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/ui",
        message: [
          "pnpm install",
          "pnpm run build"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "uv sync"
        ]
      }
    }
  ]
}
