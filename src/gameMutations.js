export const gameMutations = {
    removeFromNumbers: (state, indexInNumbers) => {
        delete state.numbers[indexInNumbers];
    },
    changeLoadingStatus: (state, demandedStatus) => {
        state.loading = demandedStatus
    },
    changeSelectedDiceNumber: (state, selectedNumber) => {
        state.selectedDiceNumber = selectedNumber
    },
    changeNumbers: (state, numbers) => {
        state.numbers = numbers
    }
}