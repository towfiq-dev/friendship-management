import React, { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';
import Call from '../../tablist/Call/Call';
import Text from '../../tablist/text/Text';
import Video from '../../tablist/video/Video';
const Timeline = () => {
    const {calls, texts, videos} = useContext(MainContext)
    
  return (
    <div>
      <div>
        {
        calls.map((call, index)=><Call call={call} key={index}></Call>)
        }
      </div>

      <div>
        {
        texts.map((text, index)=><Text text={text} key={index}></Text>)
        }
      </div>

      <div>
        {
        videos.map((video, index)=><Video video={video} key={index}></Video>)
        }
      </div>
      {/* <Tabs>
    <TabList>
      <Tab>Call</Tab>
      <Tab>Text</Tab>
      <Tab>Video</Tab>
    </TabList>

    <TabPanel>
      <Call></Call>
    </TabPanel>
    <TabPanel>
      <Text></Text>
    </TabPanel>
    <TabPanel>
      <Video></Video>
    </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default Timeline;