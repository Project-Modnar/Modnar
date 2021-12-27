import React, { useEffect, useState } from "react";

function Upload() {
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState(null);
  const onChange = (e) => {
    console.log(e.target.files.length);

    for (let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = (a) => {
        setFile((file) => [...file, a.currentTarget.result]);
      };
      if (e.target.files && e.target.files[i])
        reader.readAsDataURL(e.target.files[i]);
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className="upload">
      <div id="component">
        <h2>사진</h2>
        <input type="file" multiple onChange={onChange} id="picture" />
        <label htmlFor="picture">
          <div id="pictureBox">
            {file[0] ? (
              <img id="preview" src={file[0]} alt="img" />
            ) : (
              <>
                <img id="nonePicture" src="grayLogo.png" />
                <p>사진을 선택해주세요.</p>
              </>
            )}
          </div>
        </label>
        <input id="picture" type={"file"}></input>
      </div>

      <div id="title-component">
        <h2>제목</h2>
        <input type={"text"} id="title"></input>
      </div>

      <div id="component">
        <h2>태그</h2>
      </div>

      <div id="component">
        <textarea id="description" placeholder="설명"></textarea>
      </div>

      <div id="component" className="price">
        <h2>가격</h2>
        <input type={"text"} id="price"></input>
        <h2 id="won">원</h2>
      </div>
      <input type="button" id="uploadBtn" value={"업로드"}></input>
    </div>
  );
}
export default Upload;
