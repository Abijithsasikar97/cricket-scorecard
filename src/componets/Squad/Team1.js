/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Container, SubContainer, Divider, Teamscard} from '../styles';
import { Teams } from './style'
import history from '../../history';
import bat from '../../static/bat.svg';
import ball from '../../static/ball.svg';
import wk from '../../static/wk.svg';
import batball from '../../static/batball.svg'

const Batsman = ['Hashim Amla','David Miller','Faf du Plesis(C)', 'Rassie van der Dussen']

const AllRounder = ['Chris Morris', 'Dwaine Pretorius', 'JP Duminy']

const Wk = ['Quinton de Kock']

const Bowler = ['Andile Phehlukwayo', 'Beuran Hendricks', 'Imran Tahir', 'Kagiso Rabada', 'Lungi Ngidi', 'Tabraiz Shamsi']

class RSA extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }

    render () {
        return (
            <Container>
                <SubContainer>
                    <a onClick={() => { history.push('/') }}>---Back---</a>
                    <Teams>
                        <h1 className="batsman-bowler-all">Batsman</h1>
                        <Teamscard onClick={() => { history.push('/batsman') }}>
                            {Batsman.map((bats, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={bat} alt="bat" />{bats}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all">All Rounder</h1>
                        <Teamscard onClick={() => { history.push('/allrounders') }}>
                            {AllRounder.map((all, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={batball} alt="bat" />{all}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all">Wicket Keeper</h1>
                        <Teamscard onClick={() => { history.push('/deKock') }}>
                            {Wk.map((Wk, key) => (
                                <h3 key={key}>
                                    <img className="icon" src={wk} alt="bat" />{Wk}
                                </h3>
                            ))}
                        </Teamscard>
                        <Divider />
                        <h1 className="batsman-bowler-all">Bowler</h1>
                        <Teamscard onClick={() => { history.push('/bowlers') }}>
                            {Bowler.map((bowl, bowler) => (
                                <h3 key={bowler}>
                                    <img className="icon" src={ball} alt="bat" />{bowl}
                                </h3>
                            ))}
                        </Teamscard>
                    </Teams>
                </SubContainer>
            </Container>
        );
    }
}

export default RSA;
