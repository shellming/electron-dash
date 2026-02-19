
const MainName = 'Spacebar Clicker';

export function getImage(game: string) {
    return 'https://image.space-bar-clicker.com/' + game.replaceAll(' ', '-').toLowerCase() + '.avif'
}

export function getUrl(game: string) {
    if (game == MainName) {
        return '/';
    } else {
        return '/' + game.replaceAll(' ', '-').toLowerCase();
    }
}