export class AirlineService {
    constructor(contract){

        this.contract = contract;
    }

    async getFlights(){
        let total = await this.getTotalFloghts();
        let flights = [];
        for (let i = 0; i < total; i++){
            let flight = await this.contract.flights(i);
            flights.push(flight)
        }
            return this.mapFlights(flights)
    }

    async getTotalFloghts(){
        return (await this.contract.totalFlights()).toNumber()
    }

    mapFlights(flights){
        return flights.map(flight => {
            return {
                name: flight[0],
                price: flight[1].toNumber()
            }
        })
    }
}