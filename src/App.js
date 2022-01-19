import { useEffect, useState } from "react";
import Article from "./components/Article";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('tatsuro1997')
  const ids = ['tatsuro1997','aws', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName(data.name)
      })
      .catch(error => {
        console.log(error);
      })
  },[id])

  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
      {/* <Article
        title={'タイトル'}
        content={'コンテンツ'}
      />
      <Article
        title={'テスト'}
        content={'コンテンツ'}
      />
      <Article
        title={'再利用可能'}
        content={'コンテンツ'}
      /> */}
    </div>
  );
};

export default App;
