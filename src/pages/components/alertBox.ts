import { styled } from 'styled-components'

interface Props {
  active: boolean
  animation: string
}

export const SimpleAlert = styled.div<Props>`
  /* display: ${(props) => (props.active ? 'flex' : 'none')}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  position: fixed;
  /* right: 20rem;
  top: 2rem; */
  gap: 2rem;
  width: 16rem;
  margin: 20px auto;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px #ccc;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  /* animation:  */
  animation: ${(props) => props.animation};
  //alert-box 0.6s linear forwards;
  //'hideAlert 0.6s  linear forwards'

  @keyframes alert-box {
    0% {
      right: -100%;
    }
    100% {
      right: 2.5%;
    }
  }

  @keyframes hideAlert {
    0% {
      right: 2.5%;
    }
    100% {
      right: -50rem;
    }
  }

  .load {
    width: 100%;
    height: 5px;
    position: absolute;
    border-radius: 6px;
    bottom: 0;
    left: 0;
    animation: progressBar 2.5s linear forwards;

    @keyframes progressBar {
      0% {
        width: 100%;
      }
      100% {
        width: 0;
      }
    }
  }
`

export const SuccessAlert = styled(SimpleAlert)`
  background-color: rgba(168 240 198 / 85%);
  /* display: ${(props) => (props.active ? 'flex' : 'none')}; */
  .load {
    background-color: #178344;
  }
`
export const WarningAlert = styled(SimpleAlert)`
  background-color: rgba(255 212 138 / 85%);
  /* display: ${(props) => (props.active ? 'flex' : 'none')}; */
  .load {
    background-color: #8a5700;
  }
`
export const ErrorAlert = styled(SimpleAlert)`
  background-color: rgba(247 167 163 / 85%);
  /* display: ${(props) => (props.active ? 'flex' : 'none')}; */
  .load {
    background-color: #8f130c;
  }
`
