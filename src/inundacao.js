const rl = require('readline-sync');

// Array para armazenar os relatórios de incidentes
var reports = [];

// Função para validar se uma string está vazia
function validateString(value) {
    return value.trim() !== "";
}

// Função para validar o tipo de incidente
function validateIncidentType(type) {
    var validTypes = ["inundação", "deslizamento", "terremoto", "incêndio", "outros"];
    return validTypes.includes(type.toLowerCase());
}

// Função para relatar incidentes
function reportIncident() {
    console.clear();
    console.log("===== Relatar um Incidente =====");

    // Solicitar informações do usuário
    var incidentType = rl.question("Por favor, indique o tipo de incidente (inundação, deslizamento, terremoto, incêndio, outros):");
    var location = rl.question("Por favor, indique a localização do incidente:");
    var description = rl.question("Por favor, forneça uma descrição detalhada do incidente:");

    // Validar os dados inseridos
    if (!validateString(incidentType) || !validateString(location) || !validateString(description)) {
        console.log("\nPor favor, preencha todos os campos.");
        return;
    }

    if (!validateIncidentType(incidentType)) {
        console.log("\nTipo de incidente inválido. Por favor, escolha entre inundação, deslizamento, terremoto, incêndio ou outros.");
        return;
    }

    // Criar objeto com informações do relatório
    var report = {
        type: incidentType,
        location: location,
        description: description
    };

    // Adicionar o relatório ao array de relatórios
    reports.push(report);

    // Mostrar mensagem de confirmação
    console.log("\nIncidente relatado com sucesso!");
    rl.question("\nPressione Enter para continuar...");
}

// Função para exibir todos os relatórios de incidentes
function displayReports() {
    console.clear();
    console.log("===== Relatórios de Incidentes =====");

    if (reports.length === 0) {
        console.log("\nNenhum relatório disponível.");
    } else {
        reports.forEach(function(report, index) {
            console.log("\nIncidente #" + (index + 1));
            console.log("Tipo: " + report.type);
            console.log("Localização: " + report.location);
            console.log("Descrição: " + report.description);
            console.log("--------------------------");
        });
    }

    rl.question("\nPressione Enter para continuar...");
}

// Executar o sistema de relatório de incidentes
while (true) {
    console.clear();
    console.log("===== Sistema de Relatório de Incidentes =====");
    console.log("Escolha uma opção:");
    console.log("1. Relatar um incidente");
    console.log("2. Exibir todos os relatórios");
    console.log("3. Sair");

    var option = rl.question("Opção: ");

    switch (option) {
        case "1":
            reportIncident();
            break;
        case "2":
            displayReports();
            break;
        case "3":
            console.log("\nEncerrando o sistema de relatório de incidentes.");
            return;
        default:
            console.log("\nOpção inválida. Por favor, escolha uma opção válida.");
            rl.question("\nPressione Enter para continuar...");
            break;
    }
}
