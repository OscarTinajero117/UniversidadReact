import React from 'react';
import Card from './components/Card'
import CardBox from './components/CardBox'
import CardBoxStyle from './components/CardBox/CardBox.module.css';

const images = [
    {
        person: {
            name: 'Oscar',
            lastName: 'Tinajero'
        },
        source: 'https://scontent.fmex4-2.fna.fbcdn.net/v/t1.18169-9/14650501_1139002799521814_894883896044258313_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHFPBv0rAm76snMAMLTe6vG9tP2ZyDZ_Kr20_ZnINn8qlhgYTiLi_5LkIyc5CgcT83dSpQIWRJKqNWYFfzpGD5Y&_nc_ohc=v6Cs19Gw7WsAX9TkGH6&_nc_ht=scontent.fmex4-2.fna&oh=00_AT-sK_l1HG0ESbzuCHWFzzbaG9daqgAexDHlws5K_OZeXA&oe=62634D7D',
        likes: 102,
        id: 1
    },
    {
        person: {
            name: 'Mayte',
            lastName: 'Rodriguez'
        },
        source: 'https://scontent.fmex4-2.fna.fbcdn.net/v/t1.18169-9/10426672_868797463159978_8947199061805635417_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGqYnoenRbSIb_elIHpI5YKbA7nNhD8xfBsDuc2EPzF8FgQOcoamIOJ_Usb-tGi0ewOTrhQf0Z_TdDQqCWWaG5h&_nc_ohc=NkL4V0d0cB8AX-J8vad&_nc_ht=scontent.fmex4-2.fna&oh=00_AT_qRkMzkpFFV_qoO1MQe9XbsG1kA_5Kmj3IeQo9GRLMhg&oe=626430F8',
        likes: 3,
        id: 2
    },
    {
        person: {
            name: 'Lía',
            lastName: 'Tinajero'
        },
        source: 'https://scontent.fmex4-2.fna.fbcdn.net/v/t1.6435-9/176038014_3919680341454032_1899990078917011278_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHcKRPE9p4ruuGi1Zk4_yHKVW1RX4yEnIZVbVFfjISchh4pG9OujiScof-diLbu0T-onel8h7t9xTwyDTiPrz5X&_nc_ohc=lzwbBTQf4cQAX-ITSUb&_nc_ht=scontent.fmex4-2.fna&oh=00_AT8zSwVZMP5BRZ8QwKqGo93RoQ7131bKNwbZfFfxPnMOSw&oe=62655AAC',
        likes: 43,
        id: 3
    }
];

const App = () => (
    <div>
        <Card name='Oscar' description='Aprendiendo React' />
        <div className={CardBoxStyle.images}>
            {images.map(image => (
                <CardBox
                    name={image.person.name}
                    lastName={image.person.lastName}
                    source={image.source}
                    likes={image.likes}
                    key={image.id}
                />
            ))}
        </div>

    </div>
);

export default App;