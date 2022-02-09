import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import ResponseModal from "./Response_Modal";
import { v4 as uuidv4 } from "uuid";

const Form: FC = () => {
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState([]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const url = `https://warm-temple-55817.herokuapp.com/ad?product=${description}`;

  const getAd = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setResults(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAd();
  };

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit} method="GET">
        <div className="prod-desc-div">
          <textarea
            className="product-description"
            rows={13}
            cols={50}
            value={description}
            onChange={onChange}
            placeholder="Give us your product description to get an ad copy!"
          ></textarea>
        </div>

        <div className="btn-div">
          <button className="btn-generate" type="submit">
            Generate
          </button>
        </div>
      </form>

      <div>
        {loading && results ? (
          <p>loading...</p>
        ) : (
          <div>
            {results.map((item) => (
              <ResponseModal key={uuidv4()} adcopy={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
