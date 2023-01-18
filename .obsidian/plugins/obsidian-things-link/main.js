/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => ThingsLink
});
var import_obsidian = __toModule(require("obsidian"));
function getCurrentLine(editor, view) {
  const lineNumber = editor.getCursor().line;
  const lineText = editor.getLine(lineNumber);
  return lineText;
}
function prepareTask(line) {
  line = line.trim();
  line = line.replace(/^\W+|\W+$/, "");
  line = urlEncode(line);
  return line;
}
function urlEncode(line) {
  line = encodeURIComponent(line);
  return line;
}
function createProject(title, deepLink) {
  const project = `things:///add-project?title=${title}&notes=${deepLink}&x-success=obsidian://project-id`;
  window.open(project);
}
function createTask(line, deepLink) {
  const task = `things:///add?title=${line}&notes=${deepLink}&x-success=obsidian://task-id`;
  window.open(task);
}
var ThingsLink = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerObsidianProtocolHandler("project-id", (id) => __async(this, null, function* () {
        const projectID = id["x-things-id"];
        const workspace = this.app.workspace;
        const view = workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (view == null) {
          return;
        } else {
          const editor = view.editor;
          const thingsDeepLink = `things:///show?id=${projectID}`;
          let fileText = editor.getValue();
          const lines = fileText.split("\n");
          const h1Index = lines.findIndex((line) => line.startsWith("#"));
          if (h1Index !== -1) {
            let startRange = {
              line: h1Index,
              ch: lines[h1Index].length
            };
            let endRange = {
              line: h1Index,
              ch: lines[h1Index].length
            };
            editor.replaceRange(`

[Things](${thingsDeepLink})`, startRange, endRange);
          } else {
            let startRange = {
              line: 0,
              ch: 0
            };
            let endRange = {
              line: 0,
              ch: 0
            };
            editor.replaceRange(`[Things](${thingsDeepLink})

`, startRange, endRange);
          }
        }
      }));
      this.addCommand({
        id: "create-things-project",
        name: "Create Things Project",
        editorCallback: (editor, view) => {
          const workspace = this.app.workspace;
          const fileTitle = workspace.getActiveFile();
          if (fileTitle == null) {
            return;
          } else {
            let fileName = urlEncode(fileTitle.name);
            fileName = fileName.replace(/\.md$/, "");
            const obsidianDeepLink = this.app.getObsidianUrl(fileTitle);
            const encodedLink = urlEncode(obsidianDeepLink);
            createProject(fileName, encodedLink);
          }
        }
      });
      this.registerObsidianProtocolHandler("task-id", (id) => __async(this, null, function* () {
        const taskID = id["x-things-id"];
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (view == null) {
          return;
        } else {
          const editor = view.editor;
          const currentLine = getCurrentLine(editor, view);
          const firstLetterIndex = currentLine.search(/[a-zA-Z]|[0-9]/);
          const line = currentLine.substring(firstLetterIndex, currentLine.length);
          let editorPosition = view.editor.getCursor();
          const lineLength = view.editor.getLine(editorPosition.line).length;
          let startRange = {
            line: editorPosition.line,
            ch: firstLetterIndex
          };
          let endRange = {
            line: editorPosition.line,
            ch: lineLength
          };
          view.editor.replaceRange(`[${line}](things:///show?id=${taskID})`, startRange, endRange);
        }
      }));
      this.addCommand({
        id: "create-things-task",
        name: "Create Things Task",
        editorCallback: (editor, view) => {
          const workspace = this.app.workspace;
          const fileTitle = workspace.getActiveFile();
          if (fileTitle == null) {
            return;
          } else {
            let fileName = urlEncode(fileTitle.name);
            fileName = fileName.replace(/\.md$/, "");
            const obsidianDeepLink = this.app.getObsidianUrl(fileTitle);
            const encodedLink = urlEncode(obsidianDeepLink);
            const line = getCurrentLine(editor, view);
            const task = prepareTask(line);
            createTask(task, encodedLink);
          }
        }
      });
    });
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JQb3NpdGlvbiwgTWFya2Rvd25WaWV3LCBQbHVnaW4sIFZhdWx0LCBXb3Jrc3BhY2UsIEFwcCB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50TGluZShlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSB7XHJcblx0Y29uc3QgbGluZU51bWJlciA9IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lXHJcblx0Y29uc3QgbGluZVRleHQgPSBlZGl0b3IuZ2V0TGluZShsaW5lTnVtYmVyKVxyXG5cdHJldHVybiBsaW5lVGV4dFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlVGFzayhsaW5lOiBzdHJpbmcpIHtcclxuXHRsaW5lID0gbGluZS50cmltKClcclxuXHQvL3JlbW92ZSBhbGwgbGVhZGluZyBub24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcclxuXHRsaW5lID0gbGluZS5yZXBsYWNlKC9eXFxXK3xcXFcrJC8sICcnKVxyXG5cdGxpbmUgPSB1cmxFbmNvZGUobGluZSlcclxuXHRyZXR1cm4gbGluZVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVybEVuY29kZShsaW5lOiBzdHJpbmcpIHtcclxuXHRsaW5lID0gZW5jb2RlVVJJQ29tcG9uZW50KGxpbmUpXHJcblx0cmV0dXJuIGxpbmVcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGU6IHN0cmluZywgZGVlcExpbms6IHN0cmluZykge1xyXG5cdGNvbnN0IHByb2plY3QgPSBgdGhpbmdzOi8vL2FkZC1wcm9qZWN0P3RpdGxlPSR7dGl0bGV9Jm5vdGVzPSR7ZGVlcExpbmt9Jngtc3VjY2Vzcz1vYnNpZGlhbjovL3Byb2plY3QtaWRgXHJcblx0d2luZG93Lm9wZW4ocHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sobGluZTogc3RyaW5nLCBkZWVwTGluazogc3RyaW5nKSB7XHJcblx0Y29uc3QgdGFzayA9IGB0aGluZ3M6Ly8vYWRkP3RpdGxlPSR7bGluZX0mbm90ZXM9JHtkZWVwTGlua30meC1zdWNjZXNzPW9ic2lkaWFuOi8vdGFzay1pZGBcclxuXHR3aW5kb3cub3Blbih0YXNrKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoaW5nc0xpbmsgZXh0ZW5kcyBQbHVnaW4ge1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3Rlck9ic2lkaWFuUHJvdG9jb2xIYW5kbGVyKFwicHJvamVjdC1pZFwiLCBhc3luYyAoaWQpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvamVjdElEID0gaWRbJ3gtdGhpbmdzLWlkJ107XHJcblx0XHRcdGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMuYXBwLndvcmtzcGFjZTtcclxuXHRcdFx0Y29uc3QgdmlldyA9IHdvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcblx0XHRcdGlmICh2aWV3ID09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3JcclxuXHRcdFx0XHRjb25zdCB0aGluZ3NEZWVwTGluayA9IGB0aGluZ3M6Ly8vc2hvdz9pZD0ke3Byb2plY3RJRH1gO1xyXG5cdFx0XHRcdGxldCBmaWxlVGV4dCA9IGVkaXRvci5nZXRWYWx1ZSgpXHJcblx0XHRcdFx0Y29uc3QgbGluZXMgPSBmaWxlVGV4dC5zcGxpdCgnXFxuJyk7XHJcblx0XHRcdFx0Y29uc3QgaDFJbmRleCA9IGxpbmVzLmZpbmRJbmRleChsaW5lID0+IGxpbmUuc3RhcnRzV2l0aCgnIycpKTtcclxuXHRcdFx0XHRpZiAoaDFJbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdGxldCBzdGFydFJhbmdlOiBFZGl0b3JQb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0bGluZTogaDFJbmRleCxcclxuXHRcdFx0XHRcdFx0Y2g6bGluZXNbaDFJbmRleF0ubGVuZ3RoXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsZXQgZW5kUmFuZ2U6IEVkaXRvclBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRsaW5lOiBoMUluZGV4LFxyXG5cdFx0XHRcdFx0XHRjaDpsaW5lc1toMUluZGV4XS5sZW5ndGhcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UoYFxcblxcbltUaGluZ3NdKCR7dGhpbmdzRGVlcExpbmt9KWAsIHN0YXJ0UmFuZ2UsIGVuZFJhbmdlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnRSYW5nZTogRWRpdG9yUG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdGxpbmU6IDAsXHJcblx0XHRcdFx0XHRcdGNoOjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBlbmRSYW5nZTogRWRpdG9yUG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdGxpbmU6IDAsXHJcblx0XHRcdFx0XHRcdGNoOjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UoYFtUaGluZ3NdKCR7dGhpbmdzRGVlcExpbmt9KVxcblxcbmAsIHN0YXJ0UmFuZ2UsIGVuZFJhbmdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2NyZWF0ZS10aGluZ3MtcHJvamVjdCcsXHJcblx0XHRcdG5hbWU6ICdDcmVhdGUgVGhpbmdzIFByb2plY3QnLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcclxuXHRcdFx0XHRjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2U7XHJcblx0XHRcdFx0Y29uc3QgZmlsZVRpdGxlID0gd29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKVxyXG5cdFx0XHRcdGlmIChmaWxlVGl0bGUgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgZmlsZU5hbWUgPSB1cmxFbmNvZGUoZmlsZVRpdGxlLm5hbWUpXHJcblx0XHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxyXG5cdFx0XHRcdFx0Y29uc3Qgb2JzaWRpYW5EZWVwTGluayA9ICh0aGlzLmFwcCBhcyBhbnkpLmdldE9ic2lkaWFuVXJsKGZpbGVUaXRsZSlcclxuXHRcdFx0XHRcdGNvbnN0IGVuY29kZWRMaW5rID0gdXJsRW5jb2RlKG9ic2lkaWFuRGVlcExpbmspXHJcblx0XHRcdFx0XHRjcmVhdGVQcm9qZWN0KGZpbGVOYW1lLCBlbmNvZGVkTGluayk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyT2JzaWRpYW5Qcm90b2NvbEhhbmRsZXIoXCJ0YXNrLWlkXCIsIGFzeW5jIChpZCkgPT4ge1xyXG5cdFx0XHRjb25zdCB0YXNrSUQgPSBpZFsneC10aGluZ3MtaWQnXTtcclxuXHRcdFx0Y29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcblx0XHRcdGlmICh2aWV3ID09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3JcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50TGluZSA9IGdldEN1cnJlbnRMaW5lKGVkaXRvciwgdmlldylcclxuXHRcdFx0XHRjb25zdCBmaXJzdExldHRlckluZGV4ID0gY3VycmVudExpbmUuc2VhcmNoKC9bYS16QS1aXXxbMC05XS8pO1xyXG5cdFx0XHRcdGNvbnN0IGxpbmUgPSBjdXJyZW50TGluZS5zdWJzdHJpbmcoZmlyc3RMZXR0ZXJJbmRleCwgY3VycmVudExpbmUubGVuZ3RoKVxyXG5cdFx0XHRcdGxldCBlZGl0b3JQb3NpdGlvbiA9IHZpZXcuZWRpdG9yLmdldEN1cnNvcigpXHJcblx0XHRcdFx0Y29uc3QgbGluZUxlbmd0aCA9IHZpZXcuZWRpdG9yLmdldExpbmUoZWRpdG9yUG9zaXRpb24ubGluZSkubGVuZ3RoXHJcblx0XHRcdFx0bGV0IHN0YXJ0UmFuZ2U6IEVkaXRvclBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0bGluZTogZWRpdG9yUG9zaXRpb24ubGluZSxcclxuXHRcdFx0XHRcdGNoOiBmaXJzdExldHRlckluZGV4XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBlbmRSYW5nZTogRWRpdG9yUG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRsaW5lOiBlZGl0b3JQb3NpdGlvbi5saW5lLFxyXG5cdFx0XHRcdFx0Y2g6IGxpbmVMZW5ndGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmlldy5lZGl0b3IucmVwbGFjZVJhbmdlKGBbJHtsaW5lfV0odGhpbmdzOi8vL3Nob3c/aWQ9JHt0YXNrSUR9KWAsIHN0YXJ0UmFuZ2UsIGVuZFJhbmdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHJcblx0XHRcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnY3JlYXRlLXRoaW5ncy10YXNrJyxcclxuXHRcdFx0bmFtZTogJ0NyZWF0ZSBUaGluZ3MgVGFzaycsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMuYXBwLndvcmtzcGFjZTtcclxuXHRcdFx0XHRjb25zdCBmaWxlVGl0bGUgPSB3b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpXHJcblx0XHRcdFx0aWYgKGZpbGVUaXRsZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBmaWxlTmFtZSA9IHVybEVuY29kZShmaWxlVGl0bGUubmFtZSlcclxuXHRcdFx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXHJcblx0XHRcdFx0XHRjb25zdCBvYnNpZGlhbkRlZXBMaW5rID0gKHRoaXMuYXBwIGFzIGFueSkuZ2V0T2JzaWRpYW5VcmwoZmlsZVRpdGxlKVxyXG5cdFx0XHRcdFx0Y29uc3QgZW5jb2RlZExpbmsgPSB1cmxFbmNvZGUob2JzaWRpYW5EZWVwTGluaylcclxuXHRcdFx0XHRcdGNvbnN0IGxpbmUgPSBnZXRDdXJyZW50TGluZShlZGl0b3IsIHZpZXcpXHJcblx0XHRcdFx0XHRjb25zdCB0YXNrID0gcHJlcGFyZVRhc2sobGluZSlcclxuXHRcdFx0XHRcdGNyZWF0ZVRhc2sodGFzaywgZW5jb2RlZExpbmspXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b251bmxvYWQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBb0Y7QUFHcEYsd0JBQXdCLFFBQWdCLE1BQW9CO0FBQzNELFFBQU0sYUFBYSxPQUFPLFlBQVk7QUFDdEMsUUFBTSxXQUFXLE9BQU8sUUFBUTtBQUNoQyxTQUFPO0FBQUE7QUFHUixxQkFBcUIsTUFBYztBQUNsQyxTQUFPLEtBQUs7QUFFWixTQUFPLEtBQUssUUFBUSxhQUFhO0FBQ2pDLFNBQU8sVUFBVTtBQUNqQixTQUFPO0FBQUE7QUFLUixtQkFBbUIsTUFBYztBQUNoQyxTQUFPLG1CQUFtQjtBQUMxQixTQUFPO0FBQUE7QUFJ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
