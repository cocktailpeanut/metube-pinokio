const path = require('path')
module.exports = {
  version: "5.0",
  title: "MeTube",
  description: "Web GUI for yt-dlp with playlist support. Download videos from YouTube and dozens of other sites. https://github.com/alexta69/metube",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installing = info.running("install.js")
    let installed = info.exists("app/env")
    let running = info.running("start.js")
    let updating = info.running("update.js")
    let resetting = info.running("reset.js")

    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running) {
        let local = kernel.memory.local[path.resolve(__dirname, "start.js")]
        if (local && local.url) {
          return [{
            default: true,
            popout: true,
            icon: "fa-solid fa-rocket",
            text: "Open MeTube",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }, {
            icon: "fa-solid fa-folder-open",
            text: "Open Downloads Folder",
            href: "downloads://"
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (updating) {
        return [{
          default: true,
          icon: 'fa-solid fa-arrows-rotate',
          text: "Updating...",
          href: "update.js",
        }]
      } else if (resetting) {
        return [{
          default: true,
          icon: 'fa-solid fa-broom',
          text: "Resetting...",
          href: "reset.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-arrows-rotate",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-broom",
          text: "Factory Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
