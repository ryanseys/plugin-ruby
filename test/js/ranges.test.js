describe("ranges", () => {
  test("two dot", () => expect("1..2").toMatchFormat());

  test("negative two dot", () => expect("-2..-1").toMatchFormat());

  test("three dot", () => expect("3...4").toMatchFormat());

  test("negative three dot", () => expect("-4...-3").toMatchFormat());
});
