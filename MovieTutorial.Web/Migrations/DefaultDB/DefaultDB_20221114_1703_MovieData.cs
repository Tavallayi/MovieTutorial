using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB;

public partial class DefaultDB_20161029_1300_ExceptionLog
{
    [DefaultDB, MigrationKey(20221114_1703)]
    public class DefaultDB_20221114_1703_MovieData : AutoReversingMigration
    {
        public override void Up()
        {
            Insert.IntoTable("Movie")
                .Row(new
                {
                    Title = "The Matrix",
                    Year = 1999,
                })
                .Row(new
                {
                    Title = "Pulp fiction",
                    Year = 1994,
                })
                .Row(new
                {
                    Title = "The Lord of the Reings",
                    Year = 1999,
                });
        }
    }
}