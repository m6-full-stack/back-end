import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => console.log("Data source inicialized"))
    .catch((err: any) => {
      console.error("Error during Data Source initialization", err);
    });
  app.listen(process.env.PORT || 3333, () => {
    console.log("Servidor executando");
  });
})();
