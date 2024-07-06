import React, { useState, useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card } from "flowbite-react";

const FootballHistoryCard = ({ imageUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a data fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time for demonstration
    return () => clearTimeout(timer);
  }, []);
  const handleClick = () => {
    history.push(<Card/>); // Replace '/card' with your actual route path
  };
  return (
    <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto bg-pink-100 rounded-lg shadow-lg">
      <div className="max-w-screen-lg mx-auto flex sm:flex-row items-center justify-between px-4 sm:px-10 py-6">
        {isLoading ? (
          <Skeleton circle={true} height={48} width={48} />
        ) : (
          <button onClick={onClose}>
            <RiArrowGoBackFill onClick={handleClick} className="text-3xl sm:text-5xl mb-4 sm:mb-0" />
          </button>
        )}
        <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 sm:mb-0">
          {isLoading ? <Skeleton width={300} height={40} /> : "ប្រវិត្តនៃ កីឡារបាល់ទាត់"}
        </h1>
        {isLoading ? (
          <Skeleton circle={true} height={48} width={48} />
        ) : (
          <AiOutlineArrowsAlt className="text-3xl sm:text-5xl mb-4 sm:mb-0" />
        )}
      </div>

      <div className="my-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <Skeleton height={288} />
        ) : (
          <img
            src={imageUrl}
            alt="Historical Football Match"
            className="w-full rounded-lg object-cover max-h-72 sm:max-h-96"
          />
        )}
      </div>

      <div className="leading-relaxed px-4 sm:px-6 lg:px-8 py-6">
        {isLoading ? (
          <>
            <Skeleton height={32} width={200} />
            <Skeleton count={5} height={24} style={{ marginTop: 8 }} />
          </>
        ) : (
          <>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold pb-7">
              តើបាល់ទាត់មានប្រវត្តិមកពីណា?
            </h2>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ជាទូទៅការចាប់ផ្តើមនៃបាល់ទាត់ដែលយើងស្គាល់សព្វថ្ងៃនេះ
              footballhistory.org យោងទៅតាមការចងក្រងសៀវភៅរបស់អ្នកស្រាវជ្រាវសកលវិទ្យាល័យកីឡាបាល់ទាត់
              (Association Football) គឺចាប់ផ្តើមនៅទសវត្ស ១៨០០។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              កីឡានេះមានការកើតឡើងពីប្រវត្តិសាស្ត្រនៃការលេងបាល់ជាមួយនឹងជើង។ ការលេងបាល់ជាមួយនឹងជើងបានបង្ហាញពីការលេងបាល់នៅក្នុងអាណាចក្រម៉ាយ៉ានិងមេកសិក
              (Mesoamerican ballgame) ដែលមានប្រវត្តិបញ្ចប់នៅក្នុងសតវត្សទី ៣ លើក្លូប។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ប្រសិនបើជំនួសការលេងបាល់ជាមួយនឹងជើងដែលមិនទាន់មានការបញ្ជាក់ជាក់លាក់ទេ ។ កីឡានេះក៏មានការកើតឡើងនៅក្នុងប្រទេសចិនភាគខាងលិច ដែលគេស្គាល់ថាជា Cuju ។ Cuju
              គឺជាការលេងជាមួយនឹងបាល់ធ្វើពីស្បែកដែលបានពង្រឹងដោយខ្សែស្បែកគោ ។ កីឡានេះបានចាប់ផ្តើមនៅក្នុងសតវត្សទី ២៣ ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ប៉ុន្តែជាការប្រកបដោយភាពអស្ចារ្យដែល Cuju ក៏បានបន្តរហូតដល់សតវត្សទី ១៦ ។ កីឡានេះដ៏ពេញនិយមនៅក្នុងសម័យអាណាចក្រទី ១ រ៉ូម ដែលកីឡានេះត្រូវបានគេស្គាល់ថាជា
              Harpastum ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ជាពិសេសនៅក្នុងអាណាចក្របន្ទាប់ដែលមានការកើតឡើង សម្រាប់ការចាប់ផ្តើមកីឡានេះនៅជប៉ុនគឺគេស្គាល់ថាជា Kemari ។ កីឡានេះត្រូវបានគេរកឃើញនៅសតវត្សទី ៦ ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ការកើតឡើងនៃការលេងបាល់នេះចាប់ផ្តើមការលេងនៅក្នុងប្រទេសអង់គ្លេសគេស្គាល់ថាជា Mob Football ។ កីឡានេះមានការប្រកួតប្រជែងនៅក្នុងសតវត្សទី ៩
              និងមានស្តេចអង់គ្លេសបានធ្វើការរឹតបន្តឹងលើកីឡានេះនៅក្នុងសតវត្សទី ១៣ ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              នៅក្នុងសតវត្សទី ១៨ ការលេងបាល់ទាត់មានការរីកចម្រើនយ៉ាងខ្លាំងក្នុងសហគមន៍សាលារៀននិងសាកលវិទ្យាល័យ។ ការលេងបាល់ទាត់បានក្លាយជាពិធីសាស្រ្តនៃការលេងនៅក្នុងសាកលវិទ្យាល័យកាលពីឆ្នាំ
              ១៨៦៣ ដែលជាឆ្នាំដែលបានបង្កើតសមាគមបាល់ទាត់អង់គ្លេស (FA) ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ការលេងតាមច្បាប់ FA
              នេះបានបន្ថែមនូវសិទ្ធិគ្រប់គ្រងលើការលេងបាល់ទាត់គ្រប់គ្រងនៅក្នុងប្រទេសអង់គ្លេស និងបានបង្កើតការប្រកួត FA Cup ក្នុងឆ្នាំ ១៨៧២ ។
            </p>
            <p className="mb-4 text-base sm:text-lg md:text-xl">
              ការប្រកួតនេះបានក្លាយជាការប្រកួតដែលមានប្រជាប្រិយភាពខ្ពស់នៅក្នុងប្រទេសអង់គ្លេស និងបន្ទាប់មកបានរាលដាលទៅកាន់ប្រទេសផ្សេងៗទៀត។ ការបង្កើតសមាគមបាល់ទាត់អន្តរជាតិ (FIFA)
              បានកើតឡើងនៅឆ្នាំ ១៩០៤ ដែលបានបន្ដការពង្រឹងនិងខ្ពស់វិសាលភាពនៃបាល់ទាត់និងបានធ្វើឱ្យបាល់ទាត់ក្លាយជាកីឡាប្រកួតពិភពលោក។
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FootballHistoryCard;
