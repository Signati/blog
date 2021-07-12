// @ts-ignore
import {styled} from '@egoist/vue-emotion'

export default styled('header')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
  padding: 10px 2em;
  background-color: ${(props: any) => {
    return props.theme.primary.bg
  }
  };
`;
