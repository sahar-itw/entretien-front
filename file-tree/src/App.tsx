import { useState } from "react";

type Directory = {
  type: "directory";
  name: string;
  children: (Directory | File)[];
};

type File = {
  type: "file";
  name: string;
};

const fileTree: Directory = {
  type: "directory",
  name: "file-tree",
  children: [
    {
      type: "directory",
      name: "node_modules",
      children: [
        {
          type: "directory",
          name: "react",
          children: [
            {
              type: "file",
              name: "react.ts",
            },
            {
              type: "file",
              name: "DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ts",
            },
          ],
        },
      ],
    },
    {
      type: "directory",
      name: "src",
      children: [
        {
          type: "file",
          name: "index.ts",
        },
        {
          type: "file",
          name: "main.tsx",
        },
        {
          type: "file",
          name: "App.tsx",
        },
        {
          type: "file",
          name: "style.css",
        },
      ],
    },
    {
      type: "file",
      name: "package.json",
    },
    { type: "file", name: "vite.config.ts" },
    {
      type: "file",
      name: ".gitignore",
    },
    { type: "file", name: "README.md" },
  ],
};

function App() {
  return <Directory directory={fileTree} defaultOpen={true} />;
}

export default App;

function Directory({
  directory,
  defaultOpen,
}: {
  directory: Directory;
  defaultOpen: boolean;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="directory">
      {!defaultOpen && (
        <div
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="flex-center"
        >
          <p className={"chevron " + (isOpen ? "rotate" : "")}>{">"}</p>
          <p className="folderName">{directory.name}</p>
        </div>
      )}
      {isOpen && (
        <div className="children">
          {directory.children.map((child) =>
            child.type === "directory" ? (
              <Directory
                key={child.name}
                directory={child}
                defaultOpen={false}
              />
            ) : (
              <File key={child.name} file={child} />
            )
          )}
        </div>
      )}
    </div>
  );
}

function File({ file }: { file: File }): JSX.Element {
  return <p>{file.name}</p>;
}
