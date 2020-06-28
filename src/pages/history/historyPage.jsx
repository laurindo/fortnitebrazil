import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20
  },
  title: {
    color: "#f3f3f3",
    margin: 0,
    padding: "5px 20px",
    backgroundColor: "#c272d9",
    borderRadius: "20px",
    alignItems: "center",
    width: "fit-content",
    lineHeight: "32px"
  },
  subTitle: {
    color: "#c272d9"
  },
  desc: {
    color: "#6b2c7d"
  },
  curiosity: {
    "& li": {
      width: "100%",
      margin: "0 10px",
      display: "block"
    }
  }
}));

function HistoryPage() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <h4 className={classes.title}>Conheça a história de Fortnite</h4>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Lançamento</h5>
        <p className={classes.desc}>2017</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Plataformas</h5>
        <p className={classes.desc}>PS4, Xbox, Nintendo Switch, iOS, Android, Microsoft Windows</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Desenvolvedora</h5>
        <p className={classes.desc}>Epic Games</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Modos de Jogo</h5>
        <p className={classes.desc}>Um jogador e multijogador</p>
      </Grid>

      <Grid item xs={12}>
        <h5 className={classes.subTitle}>Breve Descrição</h5>
        <p className={classes.desc}><b>Fortnite</b> é um jogo eletrônico multijogador online revelado originalmente em 2011,
          desenvolvido pela <i><a href="https://www.epicgames.com/store/en-US/" target="_blank">Epic Games</a></i> e lançado como diferentes modos de
          jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.
          <br/><br/>Os modos de jogo incluem <b>Fortnite: Save the World</b>, um jogo cooperativo pay-to-play de sobrevivência para até
          quatro jogadores, que devem lutar contra cascas de zumbis e defender objetos com fortificações que eles possam construir, e&nbsp;
          <b>Fortnite Battle Royale</b>, um jogo free-to-play do gênero battle royale, onde até 100 jogadores lutam em espaços cada vez menores para
          serem a última pessoa ou time vencedor. <br/><br/>Ambos os modos de jogo foram lançados em 2017 como títulos de acesso antecipado.
          <br/><br/>Save the World
          está disponível apenas para Microsoft Windows, macOS, PlayStation 4 e Xbox One, enquanto Battle Royale foi lançado para essas mesmas
          plataformas, incluindo o Nintendo Switch e dispositivos iOS e Android.</p>
      </Grid>

      <Grid item xs={12}>
        <h5 className={classes.subTitle}>Curiosidades</h5>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Levou seis anos para ser lançado</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Não nasceu como um Battle Royale</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;A dança do Fortnite foi proibida em uma escola</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Foi o tema final de uma prova de escola</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Faturou mais que Vingadores: Na semana do seu lançamento</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Algumas pessoas foram por usar cheats</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Foi anunciado em 2011, mas só foi lnçado em 2017</label>
      </Grid>

      <Grid item xs={12}>
        <p className={classes.desc}></p>
      </Grid>
    </Grid>
  );
}

export default withWidth()(HistoryPage);
