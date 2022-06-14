import { FunctionalComponent, h } from "preact";
import { StateUpdater } from "preact/hooks";
import style from "./style.scss";

export type coverDetailsKey = "name" | "title" | "description" | "avatar";

export interface InputOperationsProps {
  coverDetails: Record<coverDetailsKey, string>;
  setCoverDetails: StateUpdater<Record<coverDetailsKey, string>>;
  avatar: string;
  setAvatar: StateUpdater<string>;
}

const InputOperations: FunctionalComponent<InputOperationsProps> = ({
  coverDetails,
  setCoverDetails,
  avatar,
  setAvatar,
}) => {
  const textInputs = [
    {
      title: "Blog title",
      name: "title",
    },
    {
      title: "Blog description",
      name: "description",
    },
    {
      title: "Author name",
      name: "name",
    },
  ];

  const setInputValue = (
    name: string,
    { target }: { target: EventTarget | null },
    isFile = false
  ): string | Blob => {
    const { value, files } = target as HTMLInputElement;
    const result = isFile && files ? files[0] : value;
    setCoverDetails({ ...coverDetails, [name]: result });
    return result;
  };

  const getImageBlob = (path: Blob) => {
    const img = new FileReader();
    img.onload = (e) => {
      setAvatar(e.target?.result as string);
    };
    img.readAsDataURL(path);
  };
  return (
    <div className={style.operations}>
      {textInputs.map(({ title, name }) => (
        <div>
          <h3>{title}</h3>
          {name !== "description" ? (
            <input
              value={coverDetails[name as coverDetailsKey]}
              onInput={(e) => setInputValue(name, e)}
            />
          ) : (
            <textarea
              value={coverDetails[name as coverDetailsKey]}
              onInput={(e) => setInputValue(name, e)}
            />
          )}
        </div>
      ))}
      <div>
        <h3>Author avatar</h3>
        {avatar && <img src={avatar} className={style.avatarPreview} />}
        <label className={style.fileUpload}>
          <input
            type="file"
            onInput={(e) => {
              const res = setInputValue("avatar", e, true);
              getImageBlob(res as Blob);
            }}
          />
          Choose file
        </label>
      </div>
    </div>
  );
};

export default InputOperations;
