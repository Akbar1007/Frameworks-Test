import { html, TemplateResult } from 'lit';
import '../src/lit-app.js';

export default {
  title: 'LitApp',
  component: 'lit-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-app style="--lit-app-background-color: ${backgroundColor}" .header=${header}></lit-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
