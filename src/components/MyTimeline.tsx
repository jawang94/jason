import { Collapse, Row, Timeline, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import elevat from '../img/elevat.png';
import guidelyte from '../img/guidelyte.png';
import xemelgo from '../img/xemelgo.png';

const { Panel } = Collapse;
const { Paragraph, Text, Title } = Typography;

export const Content = ({ children, extraContent }: any) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

export const StyledTitle = styled(Title)`
  fontweight: 500 !important;
  color: var(--color-text-primary) !important;
`;

const StyledMenuItem = styled(Timeline.Item)`
  font-size: 1rem;
`;

const StyledPanel = styled(Panel)`
  font-size: 1rem;
`;

export const guidelyteExperience = (
  <>
    <Content extraContent={<img src={guidelyte} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Founder, CEO, &amp; Chief Engineer</StyledTitle>
        <ul>
          <li>
            Founder, CEO, and Chief Engineer of Guidelyte, a startup whose
            mission is to create a world where chasing your dreams is exciting,
            not terrifying.
          </li>
          <li>
            Our vision is to aggregate the world&apos;s professional data in a
            centralized location and build the tools that disseminate it to the
            masses.
          </li>
          <li>
            My time is split between learning about our users, myself, and my
            team, in order to create a beautiful product experience that
            actually solves people’s problems.
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const elevatExperience = (
  <>
    <Content extraContent={<img src={elevat} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Software Engineer</StyledTitle>
        <ul>
          <li>
            Led front-end development for Elevāt’s Maintenance, Service, and
            Parts platform with React.js
          </li>
          <li>
            Owned multiple UI features including Gateway Provisioning, Command
            and Control, Role-Based Access Control, and Alerts
          </li>
          <li>
            Implemented back-end APIs for exporting IoT machine data to CSV
            using Golang
          </li>
          <li>
            Maintained high code review standards in all UI components for
            readability, functionality, and efficiency
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const xemelgoExperience = (
  <>
    <Content extraContent={<img src={xemelgo} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Software Engineer</StyledTitle>
        <ul>
          <li>
            Led front-end development of Xemelgo’s platform for inventory
            control and management
          </li>
          <li>
            Resolved platform compatibility issues across all devices and
            browsers
          </li>
          <li>
            Established a company-wide best practices, code quality, and styling
            guide for writing highly effective React code
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export default function MyTimeline() {
  return (
    <>
      <Timeline pending="To be continued..." reverse>
        <StyledMenuItem color="gray">
          <Text strong>Bye University</Text> | 08.2015
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Text strong>Hello World</Text> | 06.2018
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Text strong>Graduated Coding Dojo</Text> | 12.2018
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Joined Xemelgo</Text> | 04.2019
                </>
              }
              key="1"
            >
              {xemelgoExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Joined Elevat</Text> | 06.2019
                </>
              }
              key="1"
            >
              {elevatExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="blue">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Founded Guidelyte</Text> | 06.2020
                </>
              }
              key="1"
            >
              {guidelyteExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
      </Timeline>
    </>
  );
}
