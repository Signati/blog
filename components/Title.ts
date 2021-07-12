// @ts-ignore
import {styled} from '@egoist/vue-emotion'

export default styled('h1', {
  props: {
    m: {
      type: Object,
      required: false
    }
  }
})`
  margin: 0;
  font-size: 3em;
  color: ${(props: any) => props.theme.primary.color};

  margin-bottom: ${(props: any) => props.m.bottom};
`;
