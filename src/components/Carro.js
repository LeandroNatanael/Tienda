import { Component } from "react";
import BubbleAlert from './BubbleAlert'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position : 'relative',
        right: 15,
        top: 55,
    }
}

class Carro extends Component {
    render() {
        return (
            <div>
                <span style = {styles.bubble}>
                    <BubbleAlert value = '' />
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro