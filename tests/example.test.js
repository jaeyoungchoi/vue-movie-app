import { mount } from "@vue/test-utils";
import Example from "./Example.vue";

test("메세지를 변경합니다.", () => {
    const wrapper = mount(Example);
    // wrapper.vm === this
    expect(wrapper.vm.msg).toBe("Hello Vue test utils?");
});

// import * as example from "./example";

// describe("비동기 테스트", () => {
//     // test("done", (done) => {
//     //     asyncFn().then((res) => {
//     //         expect(res).toBe("Done!");
//     //         done();
//     //     });
//     // });
//     // test("then", () => {
//     //     return asyncFn().then((res) => {
//     //         expect(res).toBe("Done!");
//     //     });
//     // });
//     // test("resolves", () => expect(asyncFn()).resolves.toBe("Done!"));
//     test("async/await", async () => {
//         jest.spyOn(example, "asyncFn").mockResolvedValue("Done!");
//         const res = await example.asyncFn();
//         expect(res).toBe("Done!");
//     }, 7000);
// });

// import axios from "axios";
// import { fetchMovieTitle } from "./example";

// describe("비동기 테스트", () => {
//     test("영화 제목 변환", async () => {
//         axios.get = jest.fn(() => {
//             return new Promise((resolve) => {
//                 resolve({
//                     data: {
//                         Title: "Frozen II",
//                     },
//                 });
//             });
//         });
//         const title = await fetchMovieTitle();
//         expect(title).toBe("Frozen ii");
//     });
// });
