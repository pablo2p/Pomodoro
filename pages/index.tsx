import React, { useState, useEffect } from 'react';

import { Button, Flex, Grid, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';

export default function Home() {
  const colorsTertiary = ["blue.500", "red.500", "purple.500"];
  const colors = ["blue.400", "red.400", "purple.400"];
  const colorsSecondary = ["blue.300", "red.300", "purple.300"];
  const [tabIndex, setTabIndex] = useState(1);
  const bgColor = colors[tabIndex];
  const secondary = colorsSecondary[tabIndex]
  const tertiary = colorsTertiary[tabIndex]

  const periodos = [5, 25, 10]
  const [estado, setEstado] = useState('COMEÇAR');
  const [minutes, setMinutes] = useState(periodos[tabIndex]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (estado === "PAUSAR") {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setEstado("COMEÇAR");
            clearInterval(myInterval)
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000)
      return () => clearInterval(myInterval);
    }
  });

  function toggleTime() {
    estado === "COMEÇAR" ? setEstado("PAUSAR") : setEstado("COMEÇAR")
  }

  function parar(index) {
    setEstado("COMEÇAR");
    setMinutes(periodos[index])
    setSeconds(0)
  }

  return (
    <Grid
      as="main"
      backgroundColor={bgColor}
      height="100vh"
      templateColumns="1fr 480px 1fr"
      templateRows="1fr 45vh 1fr"
      templateAreas="
        '. . .'
        'works form history'
        '. . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="form"
        height="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="between"
      >
        <Heading size="xl">Método Pomodoro</Heading>
        <Flex
          flex={1}
          marginTop="20px"
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={secondary}
          borderRadius="md"
          padding="20px"
        >
          <Tabs
            onChange={(index) => {
              setTabIndex(index)
              parar(index)
            }}
            color="black"
            width="100%"
            borderBottom="2px solid transparent"
            defaultIndex={1}
          >
            <TabList
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <Tab
                height="35px"
                borderRadius="sm"
                color="white"
                _selected={{ bg: tertiary, fontWeight: '600' }}
              >Intervalo Curto</Tab>
              <Tab
                margin="0 15px"
                height="35px"
                borderRadius="sm"
                color="white"
                _selected={{ bg: tertiary, fontWeight: '600' }}
              >Pomodoro</Tab>
              <Tab
                height="35px"
                borderRadius="sm"
                color="white"
                _selected={{ bg: tertiary, fontWeight: '600' }}
                _focus={{}}
              >Intervalo Longo</Tab>
            </TabList>
          </Tabs>
          <Heading fontSize="2xl" lineHeight="shorter">
            {minutes === 0 && seconds === 0 ? "00:00" : ((minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds))
            }
          </Heading>
          <Button
            bg={estado === "COMEÇAR" ? 'white' : colorsTertiary[tabIndex]}
            color={estado === "COMEÇAR" ? "gray.800" : 'white'}
            flexShrink={0}
            width="100%"
            marginTop="10px"
            borderBottom={estado === "COMEÇAR" && "5px solid"}
            borderColor={estado === "COMEÇAR" && "gray.300"}
            height="45px"
            fontWeight={600}
            onClick={toggleTime}
            _hover={estado === "COMEÇAR" ? { backgroundColor: 'white' } : { backgroundColor: colorsTertiary[tabIndex] }}
            _focus={{ outline: 'none' }}
          >{estado}</Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
