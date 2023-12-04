using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB;

public partial class DefaultDB_20161029_1300_ExceptionLog
{
    [DefaultDB, MigrationKey(20221114_1505)]
    public class DefaultDB_20221114_1505_MovieTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Movie")
                .WithColumn("MovieId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Storyline").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Year").AsInt32().Nullable()
                .WithColumn("ReleaseDate").AsDateTime().Nullable()
                .WithColumn("Runtime").AsInt32().Nullable();
        }
    }
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