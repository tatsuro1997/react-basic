import Article from "./components/Article";

function App() {
  return (
    <div>
      <Article
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
      />
    </div>
  );
};

export default App;
