import { features } from '../constants/index';
import style, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
    <div className={`w-[64px] h-[64px]  rounded-full ${style.flexCenter} bg-dimblue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain ' />
    </div>
    <div className='flex-1 flex-col ml-3 '>
    <h4 className='font-poppins font-semibold text-white text-[18px] leainding-[23px] mb-1 '>{title}</h4>
    <p  className='font-poppins font-noraml text-dimWhite text-[16px] leainding-[24px] mb-1 '>{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>You do the business, <br className='sm:block hidden' /> we’ll handle the money.</h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5 `}> With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`flex-1 flex ${style.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 relative md:items-center items-start flex-col`}>
        {features.map((features, index) => (
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business;