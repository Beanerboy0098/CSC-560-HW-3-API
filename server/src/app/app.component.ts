import { Component, OnInit } from '@angular/core';
import { PlayerService } from './Players.service';
import { Players } from './Players';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  title = 'Vegas Golden Knights Players';
  Player?: Players[];
  Players?: Players;
  Name?: string;
  Position?: string;
  Games_Played?: number;
  Goals?: number;
  Assists?: number;
  Penalty_Minutes?: number;
  Power_Play_Goals?: number;
  Power_Play_Assists?: number;
  Shots_on_Goal?: number;
  Goals_Against?: number;
  Shots_Against?: number;
  Wins?: number;
  Loses?: number;

  
  constructor(private playerService: PlayerService) { 
    
    
  }

  getPlayers()
  {
    this.playerService.getPlayers().subscribe(Players => {
      this.Player = Players;
    });
  }

  addPlayer()
  {
    const newPlayer = {
  Name: this.Name?? "Ben Huber",
  Position: this.Position?? "Left Wing",
  Games_Played: this.Games_Played?? 0,
  Goals: this.Goals?? 0,
  Assists: this.Assists?? 0,
  Penalty_Minutes: this.Penalty_Minutes?? 0,
  Power_Play_Goals: this.Power_Play_Goals?? 0,
  Power_Play_Assists: this.Power_Play_Assists?? 0,
  Shots_on_Goal: this.Shots_on_Goal?? 0,
  Goals_Against: this.Goals_Against?? 0,
  Shots_Against: this.Shots_Against?? 0,
  Wins: this.Wins?? 0,
  Loses: this.Loses?? 0
    }
    this.playerService.addPlayer(newPlayer)
    .subscribe(Players =>
      this.Player?.push(Players));

  this.playerService.getPlayers().subscribe(Players => {
    this.Player = Players;
  });
}
deletePlayer(id:any)
{
  var players = this.Players;
  this.playerService.deletePlayer(id)
    .subscribe(data => {
      if(data.n==1)
      {
        for(var i = 0; i<(this.Player?.length ?? 0); i++)
        {
          if(this.Player![i]._id == id)
          {
            this.Player!.splice(i,1);
          }
        }
      }
    });
  

    this.playerService.getPlayers().subscribe(Players => {
      this.Player = Players;
    });
}

updatePlayer(id:any)
{
 
  const updatePlayer = {
    Name: this.Name?? "Ben Huber",
    Position: this.Position?? "Left Wing",
    Games_Played: this.Games_Played?? 0,
    Goals: this.Goals?? 0,
    Assists: this.Assists?? 0,
    Penalty_Minutes: this.Penalty_Minutes?? 0,
    Power_Play_Goals: this.Power_Play_Goals?? 0,
    Power_Play_Assists: this.Power_Play_Assists?? 0,
    Shots_on_Goal: this.Shots_on_Goal?? 0,
    Goals_Against: this.Goals_Against?? 0,
    Shots_Against: this.Shots_Against?? 0,
    Wins: this.Wins?? 0,
    Loses: this.Loses?? 0
  }

  this.playerService.updatePlayer(id, updatePlayer).subscribe();

  this.playerService.getPlayers().subscribe(Players => {
    this.Player = Players;
  });
}

getAlphabet()
{
  this.playerService.getAlphabet().subscribe(Players => {
    this.Player = Players;
  });
}

getMostShots()
{
  this.playerService.getMostShots().subscribe(Players => {
    this.Player = Players;
  });
}

getMostPenaltyMinutes()
{
  this.playerService.getMostPenaltyMinutes().subscribe(Players => {
    this.Player = Players;
  });
}

getLeastShotsonGoal()
{
  this.playerService.getLeastShotsonGoal().subscribe(Players => {
    this.Player = Players;
  });
}

gettheOrderPlayerShotsAgainst()
{
  this.playerService.gettheOrderPlayerShotsAgainst().subscribe(Players => {
    this.Player = Players;
  });
}
ngOnInit(): void {
  this.getPlayers();
}
}
