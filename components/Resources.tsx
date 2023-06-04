import React from 'react';
import TextCard from './TextCard';
import SectionWrapper from './SectionWrapper';

const Resources: React.FC = () => {
  const resources = [
    { title: 'Post-ironic raw denim narwhal fingerstache la croix.', explanation: 'Put a bird on it drinking vinegar helvetica solarpunk praxis salvia seitan, squid mustache meh wolf gentrify sus listicle.' },
    { title: 'Schlitz disrupt photo booth, distillery knausgaard salvia banh mi cloud', explanation: 'Live-edge master cleanse same humblebrag gluten-free kickstarter yes plz chillwave.' },
    { title: 'Marxism typewriter skateboard', explanation: 'Live-edge master cleanse same humblebrag gluten-free kickstarter yes plz chillwave. ' },
    { title: 'Hashtag gatekeep humblebrag', explanation: 'offal kale chips live-edge man braid artisan seitan wolf asymmetrical you probably have heard of them selfies mukbang.' },
    { title: 'Truffaut cupping post-ironic', explanation: 'You probably have heard of them truffaut 3 wolf moon swag marfa butcher wolf scenester heirloom vape aesthetic put a bird on it.' },
  ];

  return (
    <SectionWrapper id='resources'>
      <div className="w-full">
        <div className="neobrutalist-title">
          <h2 className="text-2xl font-bold ml-8">Resources</h2>
        </div>
        <div className="grid grid-rows-5 mt-8 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <TextCard text={resource.title} />
              <div className="neobrutalist p-4">
                <p>
                  {resource.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resources;
