import { useState } from 'react';

type Directory = {
  type: 'directory';
  name: string;
  children: (Directory | File)[];
};

type File = {
  type: 'file';
  name: string;
};

const fileTree: Directory = {
  type: 'directory',
  name: 'file-tree',
  children: [
    {
      type: 'directory',
      name: 'node_modules',
      children: [
        {
          type: 'directory',
          name: 'react',
          children: [
            {
              type: 'file',
              name: 'react.ts',
            },
            {
              type: 'file',
              name: 'DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ts',
            },
          ],
        },
      ],
    },
    {
      type: 'directory',
      name: 'src',
      children: [
        {
          type: 'file',
          name: 'index.ts',
        },
        {
          type: 'file',
          name: 'main.tsx',
        },
        {
          type: 'file',
          name: 'App.tsx',
        },
        {
          type: 'file',
          name: 'style.css',
        },
      ],
    },
    {
      type: 'file',
      name: 'package.json',
    },
    { type: 'file', name: 'vite.config.ts' },
    {
      type: 'file',
      name: '.gitignore',
    },
    { type: 'file', name: 'README.md' },
  ],
};
const RenderDirectory = ({
  directory,
  index,
}: {
  index: number;
  directory: Directory;
}): JSX.Element => {
  const [show, setShow] = useState(index === 0 ? true : false);

  return (
    <>
      {' '}
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        {' '}
        {directory.name}
      </div>
      {show
        ? directory.children.map((item) => {
            if (item.type === 'directory') {
              return (
                <RenderDirectory
                  index={index + 1}
                  key={item.name}
                  directory={item}
                />
              );
            } else {
              return (
                <>
                  <div>{item.name}</div>
                </>
              );
            }
          })
        : null}
    </>
  );
};

function App() {
  return (
    <>
      <RenderDirectory index={0} directory={fileTree} />
    </>
  );
}

export default App;
