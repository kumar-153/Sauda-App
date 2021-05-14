import * as React from "react";
import { List } from "react-native-paper";

const ListAccordion = ({ title, items, children }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title={title}>
      <List.Accordion
        title={title}
        left={(props) => <List.Icon {...props} icon="chevron-circle-right" />}
        expanded={expanded}
        onPress={handlePress}
      >
        {items.map((feature, idx) => (
          <List.Item key={idx} title={feature} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default ListAccordion;
