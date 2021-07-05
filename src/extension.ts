// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { PrideBlahaj } from "./PrideBlahaj";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Blahaj is ON!");
  context.subscriptions.push(
    vscode.commands.registerCommand("blahajcodes.web", async () => {
      PrideBlahaj.createOrShow(context.extensionUri);
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("blahajcodes.Pride", async () => {
      const answer = await vscode.window.showInformationMessage(
        "how was your day with INIT",
        "Awesome",
        "Tiring"
      );

      if (answer === "Awesome") {
        vscode.window.showInformationMessage("Blahaj Loves you");
      } else {
        vscode.window.showInformationMessage(
          "Join BlahajGang. You will not feel tired"
        );
      }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
