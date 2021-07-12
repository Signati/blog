// @ts-ignore
import {styled} from '@egoist/vue-emotion'

export default styled('button', {
  props: {
    secondary: {
      type: Boolean,
      required: false
    }
  }
})`
  width: fit-content;
  padding: 0.5em 1em;
  font-size: 1em;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${(props: any) => {
    if (props.secondary) {
      return props.theme.secondary.bg;
    }
  }};
  color: ${(props: any) => {
    if (props.secondary) {
      return props.theme.secondary.color;
    }
  }};

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

