import { LikeService } from './../services/user.service';

export class WinnerComponent {
    constructor() {
        this._likeService = new LikeService();
    }
    async beforeRender() {
        this._likeService = await this._likeService.getUrl();
    }
    render() {
        return `
        <img src='${this._likeService.winners[14].member_id.images[0].image_basic.url}' width='250px'>
        <img src='${this._likeService.winners[13].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[12].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[11].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[10].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[9].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[8].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[7].member_id.images[0].image_basic.url}'width='250px'>
        <img src='${this._likeService.winners[6].member_id.images[0].image_basic.url}'width='250px'>
        `;
    }
    afterRender() {
    }
}
