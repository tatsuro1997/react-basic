import { useState } from 'react';
import { Content, Title, PublishedButton, TextInput, Counter } from './index';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  return (
    <div>
      <Title title={props.title}/>
      <Content content={props.content} />
      <PublishedButton isPublished={isPublished} onClick={publishArticle} />
      <TextInput />
      <Counter />
    </div>
  );
};

export default Article;
