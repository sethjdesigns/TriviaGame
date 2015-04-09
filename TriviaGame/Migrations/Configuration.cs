namespace TriviaGame.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using TriviaGame.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<TriviaGame.Models.TriviaGameContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TriviaGame.Models.TriviaGameContext context)
        {

            context.Questions.AddOrUpdate(x => x.Id,

                 new Questions() { Id = 1, Question = "Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?", Answer1 = "TINA TURNER", Answer2 = "", Answer3 = "", Answer4 = "", CorrectAnswer = "TINA TURNER" },
                 new Questions() { Id = 2, Question = "Vodka, Galliano and orange juice are used to make which classic cocktail?", Answer1 = "", Answer2 = "HARVEY WALLBANGER", Answer3 = "", Answer4 = "", CorrectAnswer = "HARVEY WALLBANGER" },
                 new Questions() { Id = 3, Question = "Which American state is nearest to the former Soviet Union?", Answer1 = "", Answer2 = "", Answer3 = "ALASKA", Answer4 = "", CorrectAnswer = "ALASKA" },
                 new Questions() { Id = 4, Question = "In which year did Foinavon win the Grand National?", Answer1 = "", Answer2 = "", Answer3 = "1967", Answer4 = "", CorrectAnswer = "1967" },
                 new Questions() { Id = 5, Question = "At which battle of 1314 did Robert The Bruce defeat the English forces?", Answer1 = "", Answer2 = "", Answer3 = "", Answer4 = "BANNOCKBURN", CorrectAnswer = "BANNOCKBURN" }

                );



        }
    }
}
