

import FootballHistoryCard from '../../Components/History Page/History';
import { useGetAllContentQuery } from '../Feature/contentReducer'; // Adjust import path as necessary

const HistoryResult = () => {
  const { data: contentApi, isError, isLoading } = useGetAllContentQuery();
console.log(contentApi)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="history-result">
      {contentApi && contentApi.map((content) => (
        <FootballHistoryCard
          key={content.id}
          imageUrl={content.thumbnail}
          title={content.title}
          paragraphs={[content.body]} 
        />
      ))}
    </div>
  );
};

export default HistoryResult;
