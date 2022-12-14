import StyleList from './PhonebookStyles';
const { SectionContainer, SectionTitle } = StyleList;

const Section = props => {
  const { title, children } = props;
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

export default Section;
