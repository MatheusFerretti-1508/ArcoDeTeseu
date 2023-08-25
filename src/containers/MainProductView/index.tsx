import KitImg from '../../assets/images/arco-removebg.png'
import { GreekLetters, KitPic, MainInfo, ToBuy, Triangle } from './styles'

const MainProductView = () => {
    return (
        <div style={{display: 'flex'}}>
            <Triangle>
                <div>
                    <GreekLetters>αλέξιος αρχ</GreekLetters>
                    <KitPic src={KitImg} alt="Product" />
                </div>
            </Triangle>
            <MainInfo className='container'>
                <h1>O Arco de Teseu</h1>
                <p>
                    Sempre sonhou em ter seu nome marcado na história junto dos grandes?
                </p>
                <p>
                    Então eis aqui a solução para os teus problemas! <br />
                </p>
                <p>
                Com tal ferramenta, tuas aventuras terão um tom lendário, teus feitos
                ecoarão nos corredores do tempo e terás uma vida de glória!
                </p>
                <ToBuy href='https://google.com'>Comprar</ToBuy>
            </MainInfo>
        </div>
    )
}

export default MainProductView