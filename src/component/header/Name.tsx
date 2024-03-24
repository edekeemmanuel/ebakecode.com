import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'

const AppContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Container = styled('div', {
  display: 'flex',
  gap: 10,
  marginBottom: 80,
})

const Box = styled('div', {
  position: 'relative',
  top: 40,
})

const SharedStyles = {
  
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  backfaceVisibility: 'hidden',
}

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  border: 'solid 2px #1a1a1a',
})

const BackBox = styled(animated.div, {
  ...SharedStyles,
  border: 'solid 2px #fdb23f',
  color: '#fafafa',
})

const items = ['E ','B', 'A', 'K', 'E', 'C', 'O', 'D', 'E']

export default function Name() {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }))

  const isFlipped = useRef(false)

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      })
      isFlipped.current = false
    } else {
      api.start({
        rotateX: 180,
      })
      isFlipped.current = true
    }
  }

  return (
    <AppContainer className="myPhone:h-20 md:h-28 bg-black">
      <Container onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <Box className="md:w-14 md:h-14 myPhone:w-7 myPhone:h-7" key={i}>
            <FrontBox
            className="bg-blue-900 md:text-3xl"
              key={items[i]}
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                transformStyle: 'preserve-3d',
              }}>
              {'?'}
            </FrontBox>
            <BackBox
            className="bg-[red] md:font-bold md:text-3xl "
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                transformStyle: 'preserve-3d',
              }}>
              {items[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
    </AppContainer>
  )
}