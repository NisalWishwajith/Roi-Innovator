import RoadMapItem from '@/src/components/Roadmap/RoadMapItem';
import { 
  webDesignData , 
  socialMediaManagementData , 
  mobileAppDevelopmentData ,  
  paidAdvertisingData , 
  copywritingData,
  contentCreationData
 } from '@/src/components/Roadmap/RoadmapData';

export const WebDesign = () => {
  return (
    <div>
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {webDesignData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};


export const SocialMediaManagement = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {socialMediaManagementData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const MobileAppDevelopment = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {mobileAppDevelopmentData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const PaidAdvertising = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {paidAdvertisingData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const Copywriting = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {copywritingData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};



export const Contentcreation = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {contentCreationData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              id={item.id}
              stage={item.stage}
              week={item.week}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};


