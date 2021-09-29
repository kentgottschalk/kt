import { writable } from "svelte/store";

export const killteams = writable(["Sisters", "Necrons"]);
export const roster = writable({
  faction: "",
  name: "",
  background: "",
  quirks: "",
});
