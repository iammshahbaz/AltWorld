import { Button, Card, Flex, Heading, Progress, Text } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faFile, faHouse } from '@fortawesome/free-solid-svg-icons';
import "./App.css"
// import { useState } from "react";
import CountUp from 'react-countup';




function App(): JSX.Element {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  return (
    <>
      {/* hello
<Button colorScheme='teal'>Button</Button> */}
      <Flex gap={4} className="container">
        {/* <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="menuBar" /> */}
        {/* <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> */}
        <div className="sidebar">
          <Flex pl={8} pb={2} pt={4}> <FontAwesomeIcon icon={faBars} className="secondary-menu" />
            <Heading size='xs' pl={2}>HI, AltWorld</Heading>
          </Flex>
          <Flex pl={8} pb={2} pt={2}> <FontAwesomeIcon icon={faHouse} color="#1ec3b3" />
            <Text fontSize={'12px'} fontWeight={'bold'} pl={2} >Dashboard</Text>
          </Flex>

          <Flex backgroundColor={'rgb(79,209,197)'} flexDir={'column'} p={3} width={'fit-content'} borderRadius={'20px'} m={4}>
            <AddIcon color={'gray'} boxSize={6} background={'white'} p={1} borderRadius={'25%'} ml={2} />
            <Heading size='xs' color={'white'} p={2}>New Assignment?</Heading>
            <Text fontSize={'12px'} color={'white'} p={2} pb={0}>Select from pre-defined questions</Text>
            <Text fontSize={'12px'} color={'white'} pl={2} pb={2}>to have a quick turnaround</Text>
            <Button style={{ backgroundColor: 'white', color: 'gray', fontSize: '12px', height: '30px', margin: "10px" }}>Create new Assignment</Button>

          </Flex>
        </div>

        <div className="secondItem">
          <Text fontSize={'12px'} fontWeight={'bold'} p={4}>Pages/<span style={{ color: 'gray' }}>Assignment</span> </Text>
          <Heading size='xs' pl={4}>Sales BDE</Heading>
          <Card>
            <Heading size='sm' p={4}>Sales BDE <span style={{ color: '#68D391', marginLeft: '180px' }} className="active-heading">Active</span></Heading>
            <Text fontSize={'12px'} pl={4} fontWeight={'bold'} color={'gray'}>
              Assignment Link
              <a
                href="https://tiny.url/asknandna"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: '160px', color: 'blue', textDecoration: 'underline', paddingRight: '10px' }}
                className="link"
              >
                https://tiny.url/asknandna
              </a>
            </Text>
            <Text fontSize={'12px'} pl={4} fontWeight={'bold'} color={'gray'}>Assignment Hours <span className="link" style={{ color: 'gray', marginLeft: '150px' }}>3 hours</span></Text>
            <Text fontSize={'12px'} pl={4} pb={4} fontWeight={'bold'} color={'gray'}>Assignment ends at <span className="link" style={{ color: 'gray', marginLeft: '140px' }}>11 March 2024</span></Text>
            <Flex p={2}>
              <Button style={{ backgroundColor: 'white', fontSize: '10px', height: '20px' }}>
                <FontAwesomeIcon icon={faBox} style={{ paddingRight: '10px' }} />
                TO REVIEW
              </Button>
              <Button style={{ backgroundColor: 'white', fontSize: '10px', height: '20px' }}>
                <FontAwesomeIcon icon={faFile} style={{ paddingRight: '10px' }} />
                Shortlisted
              </Button>
            </Flex>


            <Flex justify={'space-between'} p={2}>
              <Text fontSize={'10px'} fontWeight={'bold'} pl={2} pr={2} color={"gray"}>Candidate</Text>
              <Text fontSize={'10px'} fontWeight={'bold'} pl={2} pr={2} color={"gray"}>Score</Text>
            </Flex>

            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#68D391'}><CountUp end={78} duration={6} />%</Heading>
            </Flex>

            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#68D391'}><CountUp end={72} duration={5} />%</Heading>
            </Flex>

            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#68D391'}><CountUp end={64} duration={4} />%</Heading>
            </Flex>


            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#ecb22e'}><CountUp end={32} duration={2} />%</Heading>
            </Flex>

            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#68D391'}><CountUp end={52} duration={4} />%</Heading>
            </Flex>

            <Flex justify="space-between" alignItems="center" p={2} className="second-percentage">
              <Flex alignItems="center">
                <img style={{ width: '30px', height: '30px', borderRadius: '20%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                <Flex flexDir="column">
                  <Heading size="xs">Saurabh Singh</Heading>
                  <Text fontSize={'12px'} color={'gray'}>saurabh@gmail.com</Text>
                </Flex>
              </Flex>
              <Heading size="sm" pr={2} color={'#ecb22e'}><CountUp end={44} duration={3} />%</Heading>
            </Flex>


          </Card>
        </div>

        {/* 3rdcard */}
        <div className="third">
          <Card marginTop={12} width={'auto'} p={2}>
            <Flex className="thirdItem">
              <div>
                <Flex justify="space-between" alignItems="center" p={2} pr={0} className="third-percentage" >
                  <Flex alignItems="space-between">
                    <img style={{ width: '50px', height: '50px', borderRadius: '10%', marginRight: '10px' }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgLilcVMauyAyTJYJyWkU7TQFiMPj9szqbrEkVO59yezb1nQ7b" alt="img" />
                    <Flex flexDir="column">
                      <Heading size="xs">Saurabh Singh</Heading>
                      <p style={{ margin: '0' }}>saurabh@gmail.com</p>
                    </Flex>
                  </Flex >
                  <Heading size="md" pr={0} color={'#68D391'}><CountUp end={78} duration={6}/>%</Heading>
                </Flex>
                <Flex className="progress">
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'gray'}>Behavioural</Text>
                  <Progress colorScheme='green' width={'60%'} size='sm' value={90} borderRadius={'10px'} m={2} ml={12} className="progress-animation" />
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'#68D391'}>9/10</Text>

                </Flex>

                {/* comm */}
                <Flex className="progress">
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'gray'}>Communication</Text>
                  <Progress colorScheme='green' width={'60%'} size='sm' value={80} borderRadius={'10px'} m={2} ml={7} className="progress-animation" />
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'#68D391'}>8/10</Text>

                </Flex>

                {/* situat */}
                <Flex className="progress">
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'gray'}>SituationHandling</Text>
                  <Progress colorScheme='yellow' width={'60%'} size='sm' value={60} borderRadius={'10px'} m={2} ml={4} className="progress-animation" />
                  <Text fontSize={'12px'} pl={2} fontWeight={'bold'} color={'#ecb22e'}>6/10</Text>

                </Flex>

                <div style={{ padding: '10px' }}>
                  <Heading size='xs'>About</Heading>
                  <Text fontSize={'12px'} color={'gray'} >Lorem ipsum dolor sit amet consectetur adipisicing elit hells.
                    <br /> Quisquam, saepe quasi?</Text>
                </div>

                <div style={{ padding: '10px' }}>
                  <Heading size='xs'>Experience</Heading>
                  <Text fontSize={'12px'} color={'gray'} >Lorem ipsum dolor sit amet consectetur adipisicing elit hells.
                    <br /> Quisquam, saepe quasi?</Text>
                </div>

                <div style={{ padding: '10px' }}>
                  <Heading size='xs'>Hobbies</Heading>
                  <Text fontSize={'12px'} color={'gray'} >Lorem ipsum dolor sit amet consectetur adipisicing elit hells.
                    <br /> Quisquam, saepe quasi?</Text>
                </div>

                <div style={{ padding: '10px' }}>
                  <Heading size='xs'>Introduction</Heading>
                  <Text fontSize={'12px'} color={'gray'} >Lorem ipsum dolor sit amet consectetur adipisicing elit hells.
                    <br /> Quisquam, saepe quasi?</Text>
                </div>
                <button style={{ backgroundColor: '#1ec3b3', color: 'white', width: '75%', textAlign: "center", marginLeft: "15%", borderRadius: "5px", padding: "4px", marginTop: "10px", marginBottom: "10px" }}>SHORTLIST</button>
              </div>

              <div style={{ paddingLeft: '20px', paddingRight: '5px' }}>
                <iframe
                  width="250"
                  height="460"
                  src="https://www.youtube.com/embed/pYhdPHKBupU"
                  title="Can you get 9/9 countries correct?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '20px' }}
                  className="video"
                  
                ></iframe>


              </div>
            </Flex>
          </Card>
        </div>
      </Flex>
    </>
  )
}

export default App
