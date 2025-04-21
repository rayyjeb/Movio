import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { MotiView, AnimatePresence } from 'moti'

const TabIcon = ({ focused, icon, title }: any) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {focused ? (
                <MotiView
                    key="focused"
                    from={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: 'timing', duration: 300 }}
                >
                    <ImageBackground
                        source={images.highlight}
                        className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
                    >
                        <Image source={icon} tintColor="#151312" className='size-5' />
                        <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
                    </ImageBackground>
                </MotiView>
            ) : (
                <MotiView
                    key="unfocused"
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'timing', duration: 300 }}
                    className='size-full items-center justify-center rounded-full mt-4'
                >
                    <Image source={icon} tintColor="#A8B5DB" className='size-5' />
                </MotiView>
            )}
        </AnimatePresence>
    )
}

const _Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false, tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }, tabBarStyle: {
                backgroundColor: '#0f0d23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0f0d23'
            }
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home', headerShown: false, tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={icons.home} title="Home" />
                )
            }} />
            <Tabs.Screen name='search' options={{
                title: 'Search', headerShown: false, tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={icons.search} title="Search" />
                )
            }} />
            <Tabs.Screen name='saved' options={{
                title: 'Saved', headerShown: false, tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={icons.save} title="Saved" />
                )
            }} />
            <Tabs.Screen name='profile' options={{
                title: 'Profile', headerShown: false, tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={icons.person} title="Profile" />
                )
            }} />
        </Tabs>
    )
}

export default _Layout